from django.db import router
from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from app import views

router = routers.DefaultRouter()
router.register(r'phonebook', views.PhonebookView, 'phonebook')

urlpatterns = [
    path("", views.home, name="home"),
    # path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('hello/', views.HelloView.as_view(), name='hello'),
    path(r'^api/phonebook/', views.contact_list, name='contact_list'),
    path(r'^api/phonebook/<int:id>/', views.contact_detail, name='contact_detail'),
    path(r'^api/phonebook/lastname/',
         views.contact_last_name, name='contact_last_name'),


]

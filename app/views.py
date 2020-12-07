from django.shortcuts import render
from .models import Phonebook
from .serializers import PhonebookSerializer
from rest_framework import viewsets
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import PhonebookSerializer
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

# Create your views here.


class PhonebookView(viewsets.ModelViewSet):
    serializer_class = PhonebookSerializer
    queryset = Phonebook.objects.all()


# orders by first name
@api_view(['GET', 'POST', 'DELETE'])
def contact_list(request):
    if request.method == 'GET':
        contacts = Phonebook.objects.all()
        first_name = request.query_params.get('first_name', None)
        if first_name is not None:
            contacts = Phonebook.objects.get(
                first_name__icontains=first_name).order_by('first_name').asc()
        contact_serializer = PhonebookSerializer(contacts)
        return JsonResponse(contact_serializer.data, safe=False)
    elif request.method == 'POST':
        contact_data = JSONParser().parse(request)
        contact_serializer = PhonebookSerializer(data=contact_data)
        if contact_serializer.is_valid():
            contact_serializer.save()
            return JsonResponse(contact_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Phonebook.objects.all().delete()
        return JsonResponse({'message': '{} Contacts were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

# orders by last name


@api_view(['GET'])
def contact_last_name(request):
    contacts = Phonebook.objects.all().order_by('last_name').asc()
    last_name = request.query_params.get('last_name', None)
    if last_name is not None:
        contacts = Phonebook.objects.get(last_name__icontains=last_name)
    contact_serializer = PhonebookSerializer(contacts)
    return JsonResponse(contact_serializer.data, safe=False)


@api_view(['GET', 'POST', 'DELETE'])
def contact_detail(request, pk):
    try:
        contact = Phonebook.objects.get(pk=pk)
    except Phonebook.DoesNotExist:
        return JsonResponse({'message': 'This contact does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        contact_serializer = PhonebookSerializer(contact)
        return JsonResponse(contact_serializer.data, safe=False)
    elif request.method == 'DELETE':
        contact.delete()
        return JsonResponse({'message': 'Contact was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        contact_data = JSONParser().parse(request)
        contact_serializer = PhonebookSerializer(data=contact_data)
        if contact_serializer.is_valid():
            contact_serializer.save()
            return JsonResponse(contact_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


def home(request):
    return render(request, 'my-app/index.html')

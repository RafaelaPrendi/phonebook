from django.db import models

# Create your models here.
class Phonebook(models.Model):
    iid = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    contact_number = models.IntegerField(unique=True)
    
    


from rest_framework import serializers
from .models import Phonebook

#to convert model into JSON
class PhonebookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phonebook
        fields = ('iid', 'first_name', 'last_name', 'type', 'contact_number')
        

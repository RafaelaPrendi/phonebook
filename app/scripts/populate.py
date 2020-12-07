from app.models import Phonebook
import json

with open('data.json', 'r') as f:
    my_json_obj = json.load(f)


def create_contacts(json):
    for contact in my_json_obj:
        new_contact = Phonebook.objects.create(
            iid=contact['id'],
            first_name=contact['first_name'],
            last_name=contact['last_name'],
            type=contact['type'],
            contact_number=int(contact['number'].replace('-', '')))
        new_contact.save()


def run():
    print(Phonebook.objects.all().count())
    Phonebook.objects.all().delete()
    create_contacts(my_json_obj)
    print(Phonebook.objects.all().count())

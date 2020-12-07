# phonebook
Projekti eshte mendoar ne dy pjese, API i realizuar me djangorest framework dhe python qe ndodhet te folderi app, i cili pret kerkesat GET, POST, DELETE, PUSH dhe pjesa tjeter eshte frontendi qe merr data nga API dhe dergon te dhena me POST drejt backendit.

Teknologjite e perdorura jane:

Tek pjesa backend:
1. python, django rest framework, corsheaders,sqlite

Tek pjesa frontend:
reactjs, nodejs, axios, create-web-app, materialize-css

Modeli i databazes ka fushat:
iid = models.AutoField(primary_key=True)
first_name = models.CharField(max_length=50)
last_name = models.CharField(max_length=50)
type = models.CharField(max_length=20)
contact_number = models.IntegerField(unique=True)

    

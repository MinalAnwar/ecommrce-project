from django.core.management.base import BaseCommand, CommandParser
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = "Register a new user in Luxion"

    def add_arguments(self, parser):
        parser.add_argument("username", type=str, help="Unique username of new user")
        parser.add_argument("--email", type=str, help="Email of new user (optional)")
        parser.add_argument("password", type=str, help="Password of new user")
    
    def handle(self, *args, **kwargs):
        username = kwargs['username']
        email = kwargs['email']
        password = kwargs['password']

        if User.objects.filter(username=username).exists():
            self.stdout.write(self.style.ERROR(f'Username already exists.Try new username'))
        
        if not username and password:
            self.stdout.write(self.style.ERROR(f'Username and Password both are required.'))

        user = User.objects.create_user(username=username, email=email, password=password)
        self.stdout.write(self.style.SUCCESS(f'User created successfully'))


        
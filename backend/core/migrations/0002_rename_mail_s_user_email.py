# Generated by Django 4.1.1 on 2022-12-12 10:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='s_user',
            old_name='mail',
            new_name='email',
        ),
    ]
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from .models import S_User


@csrf_exempt
@require_http_methods(["POST"])
def login(request):
    email = request.POST.get('email', False)
    password = request.POST.get('password', False)
    if(email and password):
        user = S_User.objects.get(email=email, password=password)
        return JsonResponse({'user':user.id})
    return JsonResponse({'user':None})

@csrf_exempt
@require_http_methods(["POST"])
def register(request):
    email = request.POST.get('email', False)
    password = request.POST.get('password', False)
    if(email and password):
        user = S_User(email=email, password=password)
        user.save()
        return JsonResponse({'user':user.id})
    return JsonResponse({'user':None})


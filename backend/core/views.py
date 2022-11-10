from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from .models import S_User


@csrf_exempt
@require_http_methods(["POST"])
def login(request):
    mail = request.POST.get('mail', False)
    password = request.POST.get('password', False)
    if(mail and password):
        user = S_User.objects.get(mail=mail, password=password)
        return JsonResponse({'user':user.id})
    return JsonResponse({'user':None})

@csrf_exempt
@require_http_methods(["POST"])
def register(request):
    mail = request.POST.get('mail', False)
    password = request.POST.get('password', False)
    if(mail and password):
        user = S_User(mail=mail, password=password)
        user.save()
        return JsonResponse({'user':user.id})
    return JsonResponse({'user':None})


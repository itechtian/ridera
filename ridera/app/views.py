from django.shortcuts import render
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.conf import settings



def index(request):
    if request.method == "POST":
        name = request.POST.get('fullname')
        email = request.POST.get('email')
        phonenumber = request.POST.get('phonenumber')
        movingfrom = request.POST.get('movingfrom')
        floorpickup = request.POST.get('floorpickup')
        movingto = request.POST.get('movingto')
        floordropoff = request.POST.get('floordropoff')
        movingtype = request.POST.get('movingtype')
        movingdate = request.POST.get('movingdate')
        size = request.POST.get('size')
        movingtime = request.POST.get('movingtime')


        subject = "New Move Quote Reaquest"
        to = 'ndubisijnr@gmail.com'
        html_template = "qoute.html"

        html_template = render_to_string(html_template, {
            'fullname': name, 'subject': subject, 'email':email, 'phone': phonenumber,'movingfrom':movingfrom,'movingto':movingto, 'floorpickup':floorpickup,
             'floordropoff':floordropoff, 'movingtype':movingtype, 'movingdate':movingdate,'size':size,'movingtime':movingtime})
        message = EmailMessage(
            subject, html_template, settings.EMAIL_HOST_USER, [to])
        message.content_subtype = "html"
        message.send()
        success = f"{name}, thank you. Your request has been sent"
        # success = "Submitted successfully"
        context = {'success': success}
        return render(request, 'index.html',context)
    return render(request, 'index.html')

def handlePageNotFound(request, exception):
    return render(request, '404.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def termandcondition(request):
    return render(request, 'termsandcondition.html')
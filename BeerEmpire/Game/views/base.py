from django.shortcuts import render
from django.contrib.auth import logout
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views import generic
from django.views.generic import View
from ..form import UserForm
from ..form import ProfileForm

def index(request):
    context = {}
    return render(request, 'registration/login.html', context)


class RegisterView(View):
    user_form_class = UserForm
    profile_form_class = ProfileForm
    template_name = 'registration/register.html'

    def get(self, request):
        user_form = self.user_form_class(None)
        profile_form = self.profile_form_class(None)
        return render(request, self.template_name, {'userform': user_form, 'profileform':profile_form})

    def post(self, request):
        user_form = self.user_form_class(request.POST)
        profile_form = self.profile_form_class(request.POST)

        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save(commit=False)
            username = user_form.cleaned_data['username']
            password = user_form.cleaned_data['password']
            user.set_password(password)
            user.save()
            user.profile.factory_name = profile_form.cleaned_data['factory_name']
            user.save()

            user = authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/farm')

        return render(request, self.template_name, {'userform': user_form, 'profileform':profile_form})

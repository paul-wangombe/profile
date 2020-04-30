# description
A simple django react jwt authentication 
### backend
1. Django for the backend
2. django rest framework servers the api
3. django-rest-registration for creating new account
4. djangorestframework_simplejwt for jwt authentication
5. django-cors-headers adds Cross-Origin Resource Sharing (CORS) headers to responses

### frontend
1. react
2. react-dom
3. next.js - react framework for SSR
4. react-cookie 
5. axios 

# install
```shell
git clone https://github.com/paul-wangombe/profile.git
```
```shell
cd profile/
```
create and activate the virtual environment 
```shell
python3 -m venv venv
source venv/bin/activate
```
install requirements
```shell
pip3 install -r requirements.txt
```
run migrations
```shell
python manage.py migrate
```

# configure the frontend
make sure your in the project top directory ie profile/

```shell
cd frontend/
```
this will install the required packages that is:
1. react
2. react-dom
3. next
```shell
npm install
```
the project also requires axios and react-cookie
```shell
npm install axios
```
```shell
npm install react-cookie
```

run the app
```shell
npm run dev
```

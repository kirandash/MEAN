# MEAN
## 1. Intro
### 1.1 MEAN
MongoDB: 
1. A noSQL DB which stores documents in collections instead of records in tables. 
2. Enforces no schema/relations
3. Flexible since no relation in DB. We can write relation if required.
4. Easily connected to Node/Express
Express:
1. Node Framework for simplifying server side scripting.
2. Based on nodejs
3. Middleware based. Funnels req and res through functions
4. Routing, view rendering and more
Angular:
1. Client side JS framework to build SPAs.
2. Render UI with dynamic data
3. Handle user inputs
4. Communicate with backend services
Node:
1. Server side JS library
2. Listen to requests and send responses
3. Execute server side logic
4. Interact with databases and files

Version Details: Angular: 8.3.3, Node: 10.16.3
(ng --version, node -v)

### 1.2 How angular works?
1. Angular loads index.html and main.ts file and then all other components dynamically loads in index.html file.
2. ng serve : to load file via http protocol. Only loading index.html file won't work since that is just file protocol.

### 1.3 Project setup:
Extensions:
1. Angular Essentials by John Papa
2. Material Icon Theme by Philipp Kief

Project structure:
1. package.json: dependencies and dev dependencies
2. tsconfig.json: for ts compilation settings
3. angular.json: for angular cli
4. e2e: for testing
5. node_modules: packages as per package.json
6. src: application source code + config files

Project Features:
Angular Frontend - NodeJS + Express Backend - Handling data with MongoDB - Enhancing the app - Image upload - Data pagination - Authentication - Authorization - Error handling - Optimizations - Deployment

## 2. Angular FrontEnd
### 2.1 How Angular Starts?
1. index.html loads with app-root selector and main.ts file included.
2. main.ts runs. platformbrowserdynamic module runs and bootstraps app module.
3. app.module.ts - bootstraps app.component.ts which has app-root selector. 
4. In app-root selector our page will render.

### 2.2 Dividing in components
Angular thinks in components. Decouple components as much as possible. Keep splitting.

### 2.3 Generate PostCreateComponent
'@angular/core', export class, @Component

### 2.4 Adding angular material
ng add @angular/material
Installs the package and also configs in project.
npm install @angular/material - Only installs
https://material.angular.io/

### 2.5 Adding a simple form and a header

### 2.6 Creating Post List component
*ngFor, *ngIf and :host (current component selector)

### 2.7 @Input and @Output, EventEmitter

### 2.8 Creating a Post model with interface
export interface Post {
  title: string;
  content: string;
}
: Post[]

### 2.9 Adding Template Driven Form
(submit)="saveData(postForm)" #postForm="ngForm"
#title="ngModel"

### 2.10 Use service instead of input/output
If @Injectable({ providedIn: 'root' }) added to service class then no need of providing it in app.module file
Listen to updates with Subject, Subscription
postsUpdated = new Subject<Post[]>();
this.postsUpdated.next([...this.posts]);
return this.postsUpdated.asObservable();

### 2.11 Observable, Observers and Subscriptions
1. Observer (next(), error(), complete()) ---> Observable()
2. Normal observable is kind of passive, we will have to wait for something to happen in order to listen. But Subject is more active and manually we can call next.

### 2.12 Reset form
form.resetForm();

## 3. NodeJS Setup
### 3.1 Node - Angular connection
Two way of serving app:
1. Node App serves Angular Server (Node Express to handle incoming requests and - for "/" return SPA while for other routes return APIs)
2. Different servers for Angular and node (Node Express to handle incoming requests and - Angular SPA served from separate static host)

### 3.2 REST:
Representational State Transfer
1. RESTful APIs are Stateless backends
2. Independent of client
3. Communicates via following features:
3.1 Routes (e.g. /users, /posts, /products)
3.2 HTTP methods (GET, PUT, POST, DELETE)
3.3 req, res
3.4 Data: JSON format

### 3.3 Node server setup
http.createServer()
node server.js
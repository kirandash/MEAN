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

### 3.4 Express setup
mean-course --> npm install --save express

### 3.5 Improving server.js code
1. normalizedPort, onError, onListening
2. server.on("error", onError);
server.on("listening", onListening);
3. Install nodemon for better server execution instead of stopping and starting server everytime with node. since nodemon watches for changes in nodejs code. cd mean-course. 
4. npm install --save-dev nodemon
5. start:server: npm run start:server
6. const debug = require("debug")("node-angular");

### 3.6 Fetching initial posts
1. app.use('/api/posts', (req, res, next) => {...});
2. res.status(200).json({ json object });

### 3.7 Allowing CORS, Headers and Methods via setHeader()
1. res.setHeader("Access-Control-Allow-Origin", "*");
2. res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
3. res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");

### 3.8 Angular HttpClientModule for get call
this.http.get

### 3.9 Node - post data and Angular
1. Install body-parser: npm install --save body-parser
2. app.post('/api/post', (req, res, next)
3. this.http.post('http://localhost:3000/api/post', post)

## 4. MongoDB
### 4.1 Intro
1. A noSQL Database which stores "Documents" in "Collections" (instead of "Records" in "Tables" as in SQL)
2. Store application data (users, products, ...)
3. Enforces no Data schema or relations
4. Easily connected to node/express (Not to Angular)
5. A powerful database which can easily be integrated into a Node/express environement.

### 4.2 NoSQL vs SQL
NoSQL:
1. MongoDB, CouchDB
2. Enforces no Data schema
3. Less focused on relations
4. Independent documents
5. Great for: Logs, chats, text messages etc.
SQL: 
1. MySQL, MS SQL
2. Enforces a strict Data Schema
3. Relations are a core feature
4. Records are realted
5. Great for: Shopping Carts, Contacts, Networks

### 4.3 Connecting Angular to DB?
Possible but highly insecure. Since secure authentication is not possible. In client side, credentials for db should not be exposed.

### 4.4 Set up MongoDB
1. https://cloud.mongodb.com
2. Cloud Atlas
3. Build your first cluster - AWS, N.Virginia, Cluster Tier - MO Sandbox
4. Create your first Database user - Database Access - Add new user: kirandash07@gmail.com, ktv2W3li4UHbPOjG, previlige - read and write to any database.
5. Whitelist your ip address - Network Access -> Add IP Address -> Add current IP address 138.75.84.195 (Note that it will change during deployment)

### 4.5 Adding Mongoose
1. Can connect to MongoDB via NodeJS
https://docs.mongodb.com/manual/tutorial/getting-started/
But we will use a package mongoose. It makes accessing mongodb pretty easy. Since it uses Schema which defines the data structure. MongoDb does not have schema. Thus mongoose is helpful in connecting to MongoDB.
2. npm install --save mongoose

### 4.6 Creating Mongoose Schemas and model
1. https://mongoosejs.com/docs/guide.html, Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
https://mongoosejs.com/docs/schematypes.html
2. To use our schema definition, we need to convert our blogSchema into a Model we can work with.
3. Export model after creating schema and model

### 4.7 Creating a POST instance
1. Use post model from mongoose to create a post 
2. Modify post to be follow Post model instead of just req.body
const posts = new Post({
  title: req.body.title,
  content: req.body.content
});

### 4.8 Connecting our Node Express app to MongoDB
1. Go to cloud.mongodb.com
2. Clusters --> Click on "Connect"
3. Connect your application
4. Connect string only --> copy (srv address)
mongodb+srv://kirandash:<password>@cluster0-hqaum.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect("...").then().catch();

# Dentist API

Terdapat 2 REST Endpoint, Users dan Results. 

### Users
Memiliki body sebagai berikut:
```javascript
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  usia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  jenisKelamin: {
    type: DataTypes.ENUM,
    values: ["pria", "wanita"],
  },

  namaSekolah: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  alamatSekolah: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM,
    values: ["siswa", "guru", "orangtua"],
  },
```

### Results
Memiliki body sebagai berikut:
```javascript
  gigiLubang: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gigiHilang: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gigiTambal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalDebris: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalCalculus: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  indeksKebersihanGigi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  kategori: {
    type: DataTypes.STRING,
    allowNull: false,
  },
```
## Routes
### /users
```
https://dentist-api.sepaystudio.com/users
```
####  Method GET
 - Get all Users
 - Return JSON

####  Method POST
 - Store a User
 - Return JSON
 - Body Ref
```
nama: { type: "string" },
usia: { type: "number", integer: true },
jenisKelamin: { type: "enum", values: ["pria", "wanita"] },
namaSekolah: { type: "string" },
alamatSekolah: { type: "string" },
status: { type: "enum", values: ["siswa", "guru", "orangtua"] },
```

### /users/:id
```
https://dentist-api.sepaystudio.com/users/:id
```
####  Method GET
 - Get specific User within same id
 - Return JSON

####  Method PUT
 - Update a User
 - Return JSON
 - Body Ref
```
nama: { type: "string", optional: true },
usia: { type: "number", integer: true, optional: true },
jenisKelamin: { type: "enum", values: ["pria", "wanita"], optional: true },
namaSekolah: { type: "string", optional: true },
alamatSekolah: { type: "string", optional: true },
status: { type: "enum", values: ["siswa", "guru", "orangtua"], optional: true },
```
####  Method DELETE
 - Delete a User
 - Return JSON

### /results
```
https://dentist-api.sepaystudio.com/results
```
####  Method GET
 - Get all Results
 - Return JSON

####  Method POST
 - Store a Result
 - Return JSON
 - Body Ref
```
gigiLubang: { type: "number", integer: true },
gigiHilang: { type: "number", integer: true },
gigiTambal: { type: "number", integer: true },
total: { type: "number", integer: true },
totalDebris: { type: "number", integer: true },
totalCalculus: { type: "number", integer: true },
indeksKebersihanGigi: { type: "number", integer: true },
kategori: { type: "string" },
UserId: { type: "number", positive: true, integer: true },
```

### /results/:id
```
https://dentist-api.sepaystudio.com/results/:id
```
####  Method GET
 - Get specific Result within same id
 - Return JSON

####  Method PUT
 - Update a Result
 - Return JSON
 - Body Ref
```
gigiLubang: { type: "number", integer: true, optional: true },
gigiHilang: { type: "number", integer: true, optional: true },
gigiTambal: { type: "number", integer: true, optional: true },
total: { type: "number", integer: true, optional: true },
totalDebris: { type: "number", integer: true, optional: true },
totalCalculus: { type: "number", integer: true, optional: true },
indeksKebersihanGigi: { type: "number", integer: true, optional: true },
kategori: { type: "string" },
UserId: { type: "number", positive: true, integer: true, optional: true },
```
####  Method DELETE
 - Delete a Result
 - Return JSON

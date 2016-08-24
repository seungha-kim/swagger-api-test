# REST API
## documentation & testing

---

# Languages for API documentation
- [Swagger](http://swagger.io/)
- [RAML](http://www.raml.org/)
- [API Blueprint](https://apiblueprint.org/)

---

# Swagger
- JSON, YAML
- Many users, Many services
- [Open API Initiative](https://openapis.org/)
  - Google, IBM, Microsoft are member
- No easy documentation...

---

# RAML
- YAML
- Fewer users, but cleaner syntax
- Beautiful tooling
- Good guides

---

# API blueprint
- Markdown (?)

---

# Test using documentation
- Generate expectations using informations within documentations
- [Abao](https://github.com/cybertk/abao) for RAML
- [Dredd](https://github.com/apiaryio/dredd) for Swagger, API Blueprint

---

# Test flow
- create test database
- drop all tables
- execute database migration
- load fixture
- start server
- (for each test)
- begin transaction
- test some operation
- rollback transaction
- (do again)

---

# POC

- https://github.com/seungha-kim/swagger-api-test

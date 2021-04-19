import express from 'express';

const app = express();


app.get("/", (request, response) => {

return response.json({
  message:"Hello World"
});
});

app.post("/users", (request, response) => {
  return response.json({
    message: "Hello new user"
  })
});


app.listen(3333 ,() => {
  console.log('🚀 Server running on port 3333 🚀');
})
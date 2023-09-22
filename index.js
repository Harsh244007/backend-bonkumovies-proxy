const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/",async (req,res)=>{
  res.status(200).send("Working fine")
})
app.get("/api/harsh/tv/:id", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const formData = new FormData();
  formData.append("post", req.params.id);
  formData.append("action", "doo_player_ajax");
  formData.append("type", "tv");
  formData.append("nume", "streamaly");

  try {
    const response = await axios.post(
      "https://bonkumovies.com/wp-admin/admin-ajax.php",
      formData,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const data = response.data; // Get the response data directly

    res.json(data); // Send the external API response back to your frontend
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/harsh/movie/:id", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const formData = new FormData();
  formData.append("post", req.params.id);
  formData.append("action", "doo_player_ajax");
  formData.append("type", "movie");
  formData.append("nume", "streamaly");

  try {
    const response = await axios.post(
      "https://bonkumovies.com/wp-admin/admin-ajax.php",
      formData,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const data = response.data; // Get the response data directly

    res.json(data); // Send the external API response back to your frontend
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/harsh/:id", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const formData = new FormData();
  formData.append("post", req.params.id);
  formData.append("action", "doo_player_ajax");
  formData.append("type", "movie");
  formData.append("nume", "streamaly");

  try {
    const response = await axios.post(
      "https://bonkumovies.com/wp-admin/admin-ajax.php",
      formData,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const data = response.data; // Get the response data directly

    res.json(data); // Send the external API response back to your frontend
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/api/post",(req,res)=>{
  res.send({"message":sucess}).status(201)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

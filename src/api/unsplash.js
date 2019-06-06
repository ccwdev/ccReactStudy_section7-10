import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID cfd02b9691969024f5e02cd131b0d8e2e163469523e66de787ceb20644038b8d"
  }
});

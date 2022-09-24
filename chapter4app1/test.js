//command to read data from mongodb in nodejs?
app.get("/api/assets/get_all/:chapterName}", (req, res) => {
  Assets.find({ chaptername: req.params.chapterName }, (err, assets) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(assets);
  });
});

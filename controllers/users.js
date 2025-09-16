exports.getMe = (req, res, next)=>{
    try {
      res.status(200).json({
        success: true,
        user: {name:"esraa"},
      });
    } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
}
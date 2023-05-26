import Article from "../models/articles.js";

export const createArticle = async (req, res, next) => {
  try {
    const newArticle = new Article(req.body);
    const saveArticle = await newArticle.save();
    res.status(200).json(saveArticle);
  } catch (err) {
    next(err);
  }
};

export const getAllArticle = async (req, res, next) => {
  try {
    const articles = await Article.find();
    

    
    res.status(200).json(articles);
  } catch (err) {
    next(err);
  }
};

export const updateArticle = async (req, res, next) => {
  try {
    const article = await Article.updateOne(
      { email: req.body.email},
      { $set: { jobs : req.body.jobs} }
    )
    res.status(200).json(article);
    
  } catch (err) {
    next(err);
  }
};

export const deleteArticle = async (req, res, next) => {
  try {
    const article = await Article.findOne({ id: req.params.id });
    console.log(article, req.params.id)
    res.status(200).json(article);
  } catch (err) {
    next(err);
  }
};
export const getArticles = async (req, res, next) => {

  try {
    const articles = await Article.find();
    var newArticles = [];
    var value = req.query.value;
    var searchBy = req.query.searchBy;
    if (searchBy == "Company Name") {
      for (var article of articles) {
        if (article.name.toLowerCase().match(value)) {
          newArticles.push(article);
        }
      }
    }
    else if (searchBy == "Job Name") {
      for (var article of articles) {
        for (var job of article.jobs) {
          if (job.workName.toLowerCase().match(value)) {
            newArticles.push(article);
            break;
          }
        }
      }
    }
    else if (searchBy == "Job Address") {
      for (var article of articles) {
        for (var job of article.jobs) {
          if (job.jobAddress.toLowerCase().match(value)) {
            newArticles.push(article);
            break;
          }
        }
      }
    }
    else if (searchBy == "Company Address") {
      for (var article of articles) {
        if (article.address.toLowerCase().match(value)) {
          newArticles.push(article);
        }
      }
    }


    console.log(newArticles);
    res.status(200).json(newArticles);
  } catch (err) {
    next(err);
  }
};
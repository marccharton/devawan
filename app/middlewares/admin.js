const adminMiddleware = (req, res, next) => {

    if (!res.locals.user) {
        return res.redirect("/login");
    }

    if (res.locals.user.role === "admin") {
        next();
    } else {
        res.status(401).render("401");
    }

};

module.exports = adminMiddleware;
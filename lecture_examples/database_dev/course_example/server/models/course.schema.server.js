module.exports = function(mongoose) {
    var CourseSchema = mongoose.Schema({
        "id" : String,
        "title": String,
        "seats" : String,
        "starts" : String
    }, {collection: "cs5610spring2016.course"});

    return CourseSchema;
};
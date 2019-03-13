
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {
          story_title: "A Story",
          story_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed velit rhoncus, finibus nulla et, venenatis nisi. Fusce sagittis pretium neque ut blandit. Curabitur nec porta arcu, eget vulputate augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc fermentum nisl ligula, euismod porta purus porta at. Vestibulum sed tempor ante.",
          story_country: "Peru",
          story_user: 1
        },
        {
          story_title: "A Story 2",
          story_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed velit rhoncus, finibus nulla et, venenatis nisi. Fusce sagittis pretium neque ut blandit. Curabitur nec porta arcu, eget vulputate augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc fermentum nisl ligula, euismod porta purus porta at. Vestibulum sed tempor ante.",
          story_country: "Peru",
          story_user: 1
        },
        {
          story_title: "A Story 3",
          story_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed velit rhoncus, finibus nulla et, venenatis nisi. Fusce sagittis pretium neque ut blandit. Curabitur nec porta arcu, eget vulputate augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc fermentum nisl ligula, euismod porta purus porta at. Vestibulum sed tempor ante.",
          story_country: "Peru",
          story_user: 2
        },
        {
          story_title: "A Story 4",
          story_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed velit rhoncus, finibus nulla et, venenatis nisi. Fusce sagittis pretium neque ut blandit. Curabitur nec porta arcu, eget vulputate augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc fermentum nisl ligula, euismod porta purus porta at. Vestibulum sed tempor ante.",
          story_country: "Peru",
          story_user: 3
        }
      ]);
    });
};

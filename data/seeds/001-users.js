
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "Leland",
          password: "thiswillbehidden",
          email: "this@that.net",
          country: "Peru",
          title: "Backend dude",
          role: "coordinator" },
        {
            username: "Ryan",
            password: "thiswillbehidden",
            email: "this@that.net",
            country: "Peru",
            title: "Backend dude",
            role: "coordinator" },
        {
              username: "Nick",
              password: "thiswillbehidden",
              email: "this@that.net",
              country: "Peru",
              title: "Backend dude",
              role: "coordinator" },
      ]);
    });
};

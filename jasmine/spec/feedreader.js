/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });





        // This test to make sure the array of objects has a url
        it('has a url', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");

            }
        });







        // This tests to make sure the array of objects has a name

        it('has a name', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");

            }
        });
    });




    describe('THE MENU', function() {

  var a ;

        it('menu element is hidden by default', function() {

            var menuIsHidden = $('body').hasClass('menu-hidden');
              expect(menuIsHidden).toBe(true);
        });








        it('the menu changes visibility', function() {


            $('.menu-icon-link').click();
            expect($('body')).not.toContain('.menu-hidden');
            $('.menu-icon-link').click();
            expect($('body')).toContain('.menu-hidden');


        });




    });





    describe('Initaial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done());
        });

        it(' there is at least a single .entry element within the .feed container.', function() {
            expect($('.feed, .entry').length).toBeGreaterThan(0);

          });

    });



    describe('New Feed Selection', function() {

        var oldfeed, newfeed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                oldfeed = $('.feed').find('h2').text();
                done();
                console.log(oldfeed);
            });

        });


        it('new feed is loaded by loadFeed', function() {


            loadFeed(0, function() {
                newfeed = $('.feed').find('h2').text();

                console.log(newfeed);


                expect(newfeed).not.toEqual(oldfeed);

            });




        });


    });


}());

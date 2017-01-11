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

        /*
        it('should be able to add a contact', function(){
              addressBook.addContact(thisContact);

              expect(addressBook.getContact(0)).toBe(thisContact);
          });
          */
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */




        // This test to make sure the array of objects has a url
        it('has a url', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");

            }
        });




        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */


        // This tests to make sure the array of objects has a name

        it('has a name', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");

            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('THE MENU', function() {


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */




        it('menu element is hidden by default', function() {

            var menuIsHidden = document.body.className;

            if (menuIsHidden == 'menu-hidden') {



                a = true;
            }


            expect(a).toBe(true);
        });



        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */




        it('the menu changes visibility', function() {


            $('.menu-icon-link').click();
            expect($('body')).not.toContain('.menu-hidden');
            $('.menu-icon-link').click();
            expect($('body')).toContain('.menu-hidden');


        });




    });



    /* TODO: Write a new test suite named "Initial Entries" */



    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    describe('Initaial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();

            });
        });

        it(' there is at least a single .entry element within the .feed container.', function() {
            expect($('.feed, .entry').length).toBeGreaterThan(0);

          });

    });
    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */


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


            });
            //if (newfeed == 'undefined' || oldfeedd == 'undefined') {

            //} else {

                expect(newfeed).not.toEqual(oldfeed);

            //}
        });


    });


}());

//HTML5 Meetup
//Chander Dhall talk
//Twitter @csdhall
//CEO@Cazton.com



You can recoup all of your money within 24 months.constructor


//Signup for Dallas Sofware Developers Meetup

//ASP.NET Core and Angular Book

//MVPMix.com - Training ASP.NET - Angular/Azuure etc - Mastering React
//Use discont code "Cazton"

//Struggle is the best thing to colaborate
//Humility allows you


Testing With Jasmine

TDD and BDD goes together

Advantages:
--less false positives
--more expressive ExtensionScriptApis
--only code that you need to make your program work



//The art of Unit Testing - 1hr 10 min Youtube video by this Author - "Drivning a String Calculator"

Example of Unit Testing without a test runner - This is how you can write a simple test runner

var Calculator = function () {

}

Calculator.prototype.add() = function (a, b){

}

var result = {
    total: 0,
    failed: 0
}
function test(a, b, expected){
    result.total++;
    var calculator = new Calculator();
    var actual = calculator.add(a, b);
    if(actual != expected){
        result.failed++;
    }
}

test(1,2,3);
test(0,1,0);


//It is easiest to mock objects in JavaScript



Mocks vs Spys - Both Test Doubles


Easy way to setup Jasmine -
    Download Jasmine Standalone

1. Unzip
2. SpecRunner.html - View it - it will show the included source files that will be used - It is the page you see when
you


//When creating JS objects - initialize the Object:
var MyObject = function() {
};

Myobject.prototype.getThing(){
    //Here is my getThing Function, which is part of MyObject.
}


Use Karma-Cli to use a test runner - Webstorm/IDEA
    1.Donte keep Chrome in your CI/CD - You need ot use something like Phantom.JS - So this is for locallyScoped
    2. check out the setup files
    3. this is in



//WHat type of JavaScript Code is Difficult to test? - This is the first thing to look for when there is legacy code
Anonymous functions
Complex, oversized functions
lack of configuration
HIdden or shared state
Tightly Coupled


//Use Test first vs TDD - since


1. Write Unit Test Code to be Readable but Write PRoduction code to be MODULAR



//SPEC FILES

typically one spec file per js file
break down specs into responsibility so if you have one huge js file, it will need multiple spec files


if you use clock you can test if a callback was called before the desired time as well as after the desired time

Use the later Jasmine API (AddMatchers)



Boundaries within the UI

SETUP

Application State //APPlication state (redux, etc)

Server Communication //Faking/spying

Presentation/Interaction //Integration Testing = Paint.Layout - Critical layering patch -- this causes the most headache
//lookup CHANDERS Talk on this



Principles
Use Constructors first
KISS
segregate responsibilities
test first


//Less than 3% of People do UI Testing
//Do testing and put it on Resume



Stub - Spy - Mocks // Are all test Doubles

Phansom JS to Use with CI
Sinon has better Spys
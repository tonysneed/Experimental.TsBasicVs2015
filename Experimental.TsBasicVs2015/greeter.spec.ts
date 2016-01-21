/// <reference path="greeter.ts"/>
/// <reference path="Scripts/typings/jasmine/jasmine.d.ts"/>

describe("Greeter", () => {

    describe("greet", () => {

        it("returns Hello World", () => {

            // Arrange
                var greeter = new Greeter("World");

            // Act
            var result = greeter.greet();

            // Assert
            expect(result).toEqual("Hello World");
        });
    });
});
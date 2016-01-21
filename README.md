# Basic TypeScript Project in Visual Studio 2015

1. Create a new TypeScript project in VS 2015.
  - Remove app.ts file.

2. Add `greeter.ts` file.
  - Add breakpoint to `greet` function
  - Uncomment code to invoke `greet` 
  - Press F5 to debug.

    ```typescript
    class Greeter {
        constructor(public message: string) {
        }

        greet(): string {
            return "Hello " + this.message;
        }
    }
    //new Greeter("World").greet();
    ```

3. Install Jasmine packages.

    ```
    Install-Package jasmine
    Install-Package jasmine.typescript.DefinitelyTyped
    ```

4. Add `greeter.spec.ts` file.

    ```typescript
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
    ```

5. ReSharper will run the tests, but it cannot debug them.


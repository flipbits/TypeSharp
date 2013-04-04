var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ExampleProject2;
(function (ExampleProject2) {
    (function (Tests) {
        (function (Repository) {
            /// <reference path="..\..\ExampleProject2\Repository\UserRepository.ts" />
            /// <reference path="..\..\tsUnit.ts" />
            (function (Tests) {
                var UserRepositoryTests = (function (_super) {
                    __extends(UserRepositoryTests, _super);
                    function UserRepositoryTests() {
                        _super.apply(this, arguments);

                    }
                    return UserRepositoryTests;
                })(tsUnit.TestClass);
                Tests.UserRepositoryTests = UserRepositoryTests;                
            })(Repository.Tests || (Repository.Tests = {}));
            var Tests = Repository.Tests;
        })(Tests.Repository || (Tests.Repository = {}));
        var Repository = Tests.Repository;
    })(ExampleProject2.Tests || (ExampleProject2.Tests = {}));
    var Tests = ExampleProject2.Tests;
})(ExampleProject2 || (ExampleProject2 = {}));
//@ sourceMappingURL=UserRepositoryTests.js.map
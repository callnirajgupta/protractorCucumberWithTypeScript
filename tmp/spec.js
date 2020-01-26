"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
// See README.md for important details.
const protractor_1 = require('protractor');
describe('async function', function () {
    it('should wait on async function in conditional', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('http://www.angularjs.org');
            let todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos'));
            if ((yield todoList.count()) > 1) {
                debugger;
                expect((yield todoList.get(1).getText())).toEqual('build an AngularJS app');
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLDZCQUFrRSxZQUFZLENBQUMsQ0FBQTtBQUUvRSxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDekIsRUFBRSxDQUFDLDhDQUE4QyxFQUFFOztZQUNqRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDOUMsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQTtnQkFDUixNQUFNLENBQUMsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzlFLENBQUM7UUFDSCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==
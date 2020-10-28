import React from 'react'
import Home from './Home'
import { create } from 'react-test-renderer'
import { FILTER_MAP } from './Home.js'

describe('Home Snapshot', () => {
	const DATA = [
		{ id: "todo-0", name: "Eat", completed: true },
		{ id: "todo-1", name: "Sleep", completed: false },
		{ id: "todo-2", name: "Repeat", completed: false }
	];
	test('Home snapshot', () => {
		const component = create(<Home tasks={DATA} />)
		const tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})
})

describe("Filter_Map Tests", () => {
	test("Should return true no matter the input", () => {
		const filter_map_all_test = FILTER_MAP.All;
		const test_values = [true, false, null, {}, [], undefined, 0, -2, 1];
		for (let test_value of test_values)
			expect(filter_map_all_test(test_value)).toBe(true);
	});
	test('Should return the opposite value of object.completed', function () {
		const filter_map_active_test = FILTER_MAP.Active;
		const test_values = [
			{ id: "todo-0", name: "Eat", completed: true },
			{ id: "todo-1", name: "Sleep", completed: false },
			{ id: "todo-2", name: "Repeat", completed: false }
		];
		const expected_values = [false, true, true];
		for (let test_index in expected_values)
			expect(filter_map_active_test(test_values[test_index])).toBe(expected_values[test_index]);
	});
	test('Should return the value of object.completed', function () {
		const filter_map_completed_test = FILTER_MAP.Completed;
		const test_values = [
			{ id: "todo-0", name: "Eat", completed: true },
			{ id: "todo-1", name: "Sleep", completed: false },
			{ id: "todo-2", name: "Repeat", completed: false }
		];
		const expected_values = [true, false, false];
		for (let test_index in expected_values)
			expect(filter_map_completed_test(test_values[test_index])).toBe(expected_values[test_index]);
	});
})
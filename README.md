# JavaScript Null Handling in Arithmetic Operations

This repository demonstrates a common issue in JavaScript related to handling `null` values during arithmetic operations.  The `bug.js` file shows an example where null values can lead to unexpected behavior.  The solution in `bugSolution.js` provides a way to mitigate this problem and avoid potential runtime errors.

## Bug Description

The original code incorrectly attempts arithmetic operations without explicitly checking for `null` values. This can result in unexpected results or runtime errors depending on the JavaScript engine's interpretation of null during arithmetic operations.

## Solution

The solution explicitly checks for `null` values using strict equality (`===`) before performing the arithmetic operation, returning an appropriate value (e.g., `null`, 0, or a default value) if a null value is found.
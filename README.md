ng-alias
========

An angular directive to alias a variable.

Usage
-----

A one-way alias is established between the source and the destination. In this example `input` is aliased to `model`. Any changes that happen to `input` will be propogated.

```html
<input data-ng-model="input" data-ng-alias="model = input" />
```

This allows for reaching outside of the scope.

```html
<input data-ng-model="input" data-ng-alias="$parent.model = input" />
```

Multiple aliased can be registered on the same element

```html
<div data-ng-alias="alias1 = input1, $root.alias2 = input2">
  <input data-ng-model="input1" />
  <input data-ng-model="input2" />
</div>
```

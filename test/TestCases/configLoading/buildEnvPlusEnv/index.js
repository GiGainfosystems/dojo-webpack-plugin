define(["foo", "fooalias"], function(foo, fooalias) {
	it ("should load foo", function() {
		foo.should.be.eql("foo");
		fooalias.should.be.eql("foo");
	});
	it ("Should not resolve foo as defined by environment", function() {
		(typeof require.rawConfig.paths.foo === 'undefined').should.be.true;
	});
});
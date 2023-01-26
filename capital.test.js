const capitalize = require('./capital')

test('abc is equal to Abc', ()=>{
    expect(capitalize('abc')).toBe("Abc");
});



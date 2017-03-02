describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a signle item', function(){
      expect( bubbleSort([1]) ).toEqual([1]);
  });

   it('handles an array with multiple items', function(){
      expect( bubbleSort([2,3,1,8,3,10,23,34,21]) ).toEqual([1,2,3,3,8,10,21,23,34]);
       expect( bubbleSort([3,2,1]) ).toEqual([1,2,3]);
  });


      
  it('counts how many times', function(){
      spyOn(window, 'swap').and.callThrough();
  
      bubbleSort([3,2,1]);
      expect(swap.calls.count()).toEqual(3);
  })

});
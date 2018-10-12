 const {
     checkValidity,
     capitalizeFirstLetter,
     hasErrors,
     delayedProps,
     hasEmoji
 } = require('./utility')
 jest.useFakeTimers();

 describe('utilities functions', () => {
     
    it('should detect if there is an emoji', () => {
        expect(hasEmoji('🙄')).toBeTruthy()
    })
     it('should check empty validity', () => {
         expect(checkValidity("", {
             required: true
         })).toEqual({
             isValid: false,
             message: 'Field Required, not empty allowed'
         })
     })
     it('should check mimLength validity', () => {
         expect(checkValidity("testtest", {
             minLength: 10
         })).toEqual({
             isValid: false,
             message: `Min length is 10 characters`
         })
     })
     it('should check empty validity', () => {
         expect(checkValidity("", {
             required: true
         })).toEqual({
             isValid: false,
             message: 'Field Required, not empty allowed'
         })
     })
     it('should capitalize first letter', () => {
         expect(capitalizeFirstLetter("   testing   ")).toEqual("Testing")
     })
     it('should return errors', () => {
         expect(hasErrors("🙄🙄🙄TestTestTestTest🙄🙄🙄", {
             maxLength: 10,
             containEmoji: true
         })).toEqual([
             'Number of characters shouldn’t exceed 10',
             'Shouldn’t contain emojis'
         ])
     })
     it('should wait X seconds before setting up state', () => {
         function Component() {
             this.setState = (newState) => {
                 this.state = newState;
             };
             this.state = {
                 notes: [1, 2, 3]
             }
         };
         let comp = new Component();
         const newProps = {
             notes: [1, 2, 3, 4]
         };
         delayedProps.call(comp, newProps, 1000);

         expect(setTimeout).toHaveBeenCalledTimes(1);
         expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
         setTimeout(() => {
             expect(comp.state).toEqual(newProps);
         }, 1000);
         jest.runAllTimers();
     });
     it('should\'nt wait X seconds before setting up state', () => {
         function Component() {
             this.setState = (newState) => {
                 this.state = newState;
             };
             this.state = {
                 notes: [1, 2, 3, 4]
             }
         };
         let comp = new Component();
         const newProps = {
             notes: [1, 2, 3, 4]
         };
         delayedProps.call(comp, newProps, 1000);

         expect(setTimeout).not.toHaveBeenCalledTimes(1);
         expect(comp.state).toEqual(newProps);
     });
 });
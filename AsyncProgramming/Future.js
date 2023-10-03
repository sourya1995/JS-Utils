/*
* this is based on something called Fluent Interface, which allows us to chain methods together
*
*/

class Future {
    constructor(action) {
        this.actionCallbacks = [];
        this.errorCallback = () => { };
        action(this.onResolve.bind(this), this.onReject.bind(this));
    }

    then(thenHandler) {
        this.actionCallbacks.push(thenHandler);
        return this;
    }

    catch(errorHandler) {
        this.errorCallback = errorHandler;
        return this;
    }

    onResolve(value) {
        let storedValue = value;
        try {
            this.actionCallbacks.forEach((action) => {
                storedValue = action(storedValue);
            });
        } catch (error) {
            this.actionCallbacks = [];
            this.onReject(err);
        }
    }

    onReject(err) {
        this.errorCallback(err);
    }

    static any(futures) {
        return new Future((onResolve, onReject) => {
            futures.forEach(future => {
                future.then((value) => {
                    onResolve(value);
                }).catch((error) => {
                    console.error(error.message);
                })
            })
        })
    }

    static all(futures) {
        return new Future((onResolve, onReject) => {
            const results = new Array(futures.length);
            let resolvedCount = 0;

            futures.forEach((future, index) => {
                future.then((value) => {
                    results[index] = value;
                    resolvedCount++;

                    if (resolvedCount === futures.length) {
                        onResolve(results);
                    }
                }).catch((error) => {
                    onReject(error);
                })
            })
        })
    }
}

export default Future;


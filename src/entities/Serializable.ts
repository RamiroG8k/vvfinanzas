type SerializableInterface = {
    serialize: () => any;
}

class Serializable implements SerializableInterface {
    constructor() { }

    serialize() { }
};

export default Serializable;

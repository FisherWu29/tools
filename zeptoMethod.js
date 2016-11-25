window.fn= {
    /**
     * 扩展对象属性
     * @param obj
     * @param prototypes
     */
    extend: function (obj, prototypes) {
        for (var key in prototypes) {
            if (prototypes.hasOwnProperty(key)) {
                obj[key] = prototypes[key];
            }
        }
    }
};

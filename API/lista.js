module.exports={
    newLista: function(){
        return new class{
            set _results(results) {
                this.results = results;
            }
            get _results() {
                return this.results;
            }
        }
    }
}
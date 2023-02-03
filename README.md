# cicd-check-parameter

Github action to checking pipelines parameters

```yaml
jobs:
  check-parameters:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Check parameters
        uses: steplix/cicd-get-parameter@1.0.0
        id: args
        with:
          param-0: minor
          param-1: skip-pipeline
    
      - name: See output
        run: echo "Parameter 0 = ${{ steps.args.outputs.param-0 }} \n Parameter 1 = ${{ steps.args.outputs.param-1 }}
```

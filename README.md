# Sheep Counter
A tiny sinatra web app for shephard to count in their sheep on those cold dark winter evenings.

Inspired by Mary Rose Cook's [Count](https://github.com/maryrosecook/count) exemplar.

### Built with:
- Sinatra
- Vanilla JS
- Ruby

### Test harness:
- RSpec
- Capybara
- Selenium-webdriver

## To count some sheep:
[sheep-counter.herokuapp.com](https://sheep-counter.herokuapp.com/)

## To run locally
```bash
bundle install
ruby app.rb
```
Open localhost:4567 in any browser.
Start clicking the sheep!

## To test
```bash
bundle install
rspec
```

## User stories
As a shepherd
I can see the number of sheep I've counted back into the pen
So I know if the whole flock is home

As a shepherd
I can increment the number of sheep
So I can record the fact that another sheep has gone into the pen

As a shepherd
I can reopen the app and see my latest count
So I don't lose track of my count if my browser crashes



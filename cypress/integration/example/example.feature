Feature: The Google

I want to open Wikipedia page and need to know all links are present

Scenario: Opening the wikipedia page and assert number of links
  Given I open wikipedia page
  Then I should see the following number of links per section
    | section           | links |
    | Interaction       | 5     |
    | Tools             | 7     |
    | In other projects | 13    |
    | Print/export      | 3     |
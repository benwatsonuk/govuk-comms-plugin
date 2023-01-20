# GOVUK communications plugin

This plugin allows you to extend the GOV.UK Prototyping Kit (from v13 +) and create visual representations and
simulations of communication from other channels such as email, letter or SMS. It also simulates the passing of time
between communications and interaction with the web-based touch-point in the prototype.

## Usage

### On a page

Within a page view, you can add a `<script>` block to the relevant template block - for most this should
be `pageScripts`. This could look like the following:

```
{% block pageScripts %}
        <script>
          callTheFunctionYouLikeHere()
        </script>
{% endblock %}

```
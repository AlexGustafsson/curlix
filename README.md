Curlix
======
A service to provide a Matrix-like animation in your terminal using nothing but curl.

<p align="center">
  <img alt="Demo" src="https://github.com/AlexGustafsson/curlix/raw/master/demo.gif">
<p>

# Quickstart
<a name="quickstart"></a>

```
curl https://curlix-cavymqwdcc.now.sh
```

# Table of contents

[Quickstart](#quickstart)<br/>
[Technology](#technology)<br />
[Disclaimer](#disclaimer)

# Technology
<a name="technology"></a>

The service is hosted on Zeit's excellent service [Now](curlix-cavymqwdcc.now.sh). The animation is generated each time the service is started and consists of 24 frames. The set of frames is looped and streamed to any client using a user agent containing 'curl'. The colors are created using escape codes for 8-bit colors (see [this answer](https://stackoverflow.com/a/33206814/2202033) for a thorough explanation).

# Disclaimer
<a name="disclaimer"></a>

_Although the project is very capable, it is not built with production in mind. Therefore there might be complications when trying to use the service for large-scale projects meant for the public. The project was developed to easily achieve a Matrix-like animation in your terminal using only common utilities and as such it might not promote best practices nor be performant._

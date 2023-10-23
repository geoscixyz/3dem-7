+++
template = "home.html"

[extra]

title = "3DEM"
subtitle = "The 7th International Symposium on Three-Dimensional Electromagnetics"

# Sponsors
sponsors = [
]

# Organizers
organizers = [
    {image="hwt.png", alt_text="Hohmann-Wannamaker Trust", url="https://hohmannwannamakertrust.org/"},
    {image="gif.png", alt_text="Geophysical Inversion Facility", url="https://gif.eos.ubc.ca/"},
    {image="ubc.png", alt_text="University of British Columbia", url="https://www.eoas.ubc.ca/"},
    {image="bcgs.jpg", alt_text="BC Geophysical Society", url="http://www.bcgsonline.org/"},
]

# Registration fees
registrations = [
    {type="Early bird", fee="$475"},
    {type="Regular", fee="$600"},
    {type="Onsite", fee="$650"},
    {type="Student / postdoc", fee="$100"},
    {type="Retired", fee="$300"},
]

# Text in home page
about = """
We are looking forward to welcoming the 3DEM community to Vancouver this year!
The 3DEM-7 Symposium will be held at the University of British Columbia from
November 13-15. This will be a great opportunity to share
new developments and applications in 3DEM, connect with the community,
and enjoy Vancouver. You can
[register here](https://3dem7.wildapricot.org/event-5372783/Registration).
"""

registration = """
### <i class="fa-solid fa-user-plus"></i> Registration is open!

<a
  class="btn btn-success btn-lg"
  href="https://3dem7.wildapricot.org/event-5372783/Registration"
>
  Register here
</a>
"""

submit_abstract = """
* Please use one of the templates provided
    ({{
        link(fname="assets/3DEM-latex-template.zip", label="LaTeX")
    }},
    {{
        link(fname="assets/3DEM7_template_msword.docx", label="word")
    }}).
* **Name your abstract** using the convention `LastName2023-3DEM7.pdf`.
* We recommend a 4 page abstract, however there is no hard limit and longer
/ shorter abstracts are accepted.
* Email your abstract to
[3delectromagnetics@gmail.com](mailto:3delectromagnetics@gmail.com).


<div class="d-flex flex-row justify-content-start flex-wrap gap-2">
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Download template
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="/assets/3DEM-latex-template.zip">
          LaTeX
      </a></li>
      <li><a class="dropdown-item" href="/assets/3DEM7_template_msword.docx">
          Word
      </a></li>
    </ul>
  </div>
  <a
    class="btn btn-success"
    href="mailto:3delectromagnetics@gmail.com"
  >
    Submit your abstract
  </a>
</div>
"""

submit_poster_title = """
Send an email to
[3delectromagnetics@gmail.com](mailto:3delectromagnetics@gmail.com) with:

* Poster **title**
* List of **authors**

<a
  class="btn btn-success"
  href="mailto:3delectromagnetics@gmail.com"
>
  Submit poster title
</a>
"""

hwt_about = """
The 3DEM symposium is organized by the [Hohmann-Wannamaker Trust](https://hohmannwannamakertrust.org/).

The Hohmann-Wannamaker Trust (HWT) was established in December 2022
as the continuation of the Gerald W. Hohmann Trust for Teaching and
Research in Electromagnetic Geophysics, following the tragic death of
trustee Phil Wannamaker on August 22.

3DEM-7 will be dedicated to honoring Phil’s legacy in the worldwide EM
community as a scientist, educator, colleague, and friend.
"""

sponsor_about = """
Please reach out to `lheagy@eoas.ubc.ca` and `ehaber@eoas.ubc.ca` if you are interested in sponsoring 3DEM-7.
"""
+++

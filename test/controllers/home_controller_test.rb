require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  def test_index
    get home_index_url
    assert_response :success
  end

end

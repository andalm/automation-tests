if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'
  require 'uri'
  require 'net/http'

  Then(/^I enter random into input field having id "([^\"]*)"$/) do | id|
    $uri = URI('https://my.api.mockaroo.com/kraken-pool.json?key=40aa7c50&min_value=10&max_value=20')
	$response = Net::HTTP.get_response($uri)
        $numer_random = JSON.parse($response.body)[1]["numeric"]
  	@driver.find_element(:id, id).send_keys($numer_random)
  	sleep 2
  end
  
  Then(/^I enter random into input field having css selector "([^\"]*)"$/) do | selector |
    $uri = URI('https://my.api.mockaroo.com/kraken-pool.json?key=40aa7c50&min_value=10&max_value=20')
	$response = Net::HTTP.get_response($uri)
        $numer_random = JSON.parse($response.body)[1]["numeric"]
  	@driver.find_element(:css, selector).send_keys($numer_random)
  	sleep 2
  end

  Then(/^I clear text having css selector "([^\"]*)"$/) do |selector|
    @driver.find_element(:css, selector).clear()
    sleep 2
  end



  Then(/^I clear text having id "([^\"]*)"$/) do |id|
    @driver.find_element(:id, id).clear()
    sleep 2
  end
end

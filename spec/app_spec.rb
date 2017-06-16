
feature SheepCounterApp do
	scenario 'serves home page' do
		visit '/'
		expect(page.status_code).to eq(200)
	end
	scenario 'view number of sheep counted', :js => true do
		visit '/'
		click_on 'reset'
		find('img').click
		within '#sheep_count' do
			expect(text).to have_content("1")
		end
	end
	scenario 'view number of sheep counted', :js => true do
		visit '/'
		click_on 'reset'
		find('#add_sheep').click
		find('#add_sheep').click
		within '#sheep_count' do
			expect(text).to have_content("2")
		end
	end
	scenario 'reset number of sheep', :js => true do
		visit '/'
		find('#add_sheep').click
		click_on 'reset'
		within '#sheep_count' do
			expect(text).to have_content("0")
		end
	end
end

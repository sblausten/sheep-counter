
feature SheepCounterApp do
	scenario 'serves home page' do
		visit '/'
		expect(page.status_code).to eq(200)
	end
end